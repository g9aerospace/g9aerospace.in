import axios from 'axios';
import { execSync } from 'child_process';

// Function to capture console output
function captureConsoleOutput(command) {
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    return { success: true, output };
  } catch (error) {
    return { success: false, output: error.message };
  }
}

// Function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Run build and deploy commands
const buildResult = captureConsoleOutput('npm run build');
const deployResult = captureConsoleOutput('npm run deploy');

// Discord webhook URL
const webhookURL = 'https://discordapp.com/api/webhooks/1211414351081242645/4QusnKN8FgPJn_HPYlddAvF3Swlnb1HsUJhW1gxgF5-NZCRnXk5yo2Rd16ffz9GZ5NSR';

// Construct the message
const message = `
Lesgo script executed:

Build Result:
${buildResult.output}

Deploy Result:
${deployResult.output}
`;

// Function to split the message into chunks
function splitMessage(content) {
  const MAX_LENGTH = 2000;
  const messages = [];
  while (content.length > 0) {
    messages.push(content.substring(0, MAX_LENGTH));
    content = content.substring(MAX_LENGTH);
  }
  return messages;
}

// Check if the message exceeds the Discord character limit
const messages = splitMessage(message);

// Send each message to Discord with rate-limiting
async function sendMessage(messagesArray) {
  for (const msg of messagesArray) {
    try {
      const response = await axios.post(
        webhookURL,
        { content: msg },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Message sent to Discord', response.data);
    } catch (error) {
      console.error('Error sending message to Discord:', error.response ? error.response.data : error.message);

      // Check for rate-limiting error (status code 429)
      if (error.response && error.response.status === 429) {
        // Retry after the specified retry-after duration
        const retryAfter = error.response.headers['retry-after'] || 5; // Default to 5 seconds
        console.log(`Rate limited. Retrying after ${retryAfter} seconds...`);
        await delay(retryAfter * 1000);
        await sendMessage([msg]); // Retry the message sending for the current chunk
      }
    }
  }
}

// Send messages to Discord with rate-limiting
sendMessage(messages);
