import { component$ } from "@builder.io/qwik";

interface MetaTagsProps {
  Title: string;
  Description: string;
  ThemeColor: string;
  Link: string;
}

export default component$<MetaTagsProps>((props: MetaTagsProps) => {
  // Define meta tags using the input values
  const metaTags = [
    { name: "title", content: props.Title },
    { name: "description", content: props.Description },
    { name: "theme-color", content: props.ThemeColor },
    { name: "og:url", content: props.Link }
    // Add more meta tags as needed
  ];

  // Function to generate meta tag elements
  const renderMetaTags = () => {
    return metaTags.map((tag, index) => (
      <meta key={index} name={tag.name} content={tag.content} />
    ));
  };

  return (
    <>
      {/* Render meta tags */}
      {renderMetaTags()}
    </>
  );
});
