import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, ogTitle, ogDescription, ogImage }) => (
  <Helmet key={title}>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {ogTitle && <meta property="og:title" content={ogTitle} />}
    {ogDescription && <meta property="og:description" content={ogDescription} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
  </Helmet>
);

export default Meta;