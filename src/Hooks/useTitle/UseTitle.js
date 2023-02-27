import { Helmet } from "react-helmet";
// https://www.npmjs.com/package/react-helmet

function UseTitle({ title, description, path }) {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `Sigma | ${title}` : "Sigma | Acceuil"}</title>
        <meta name="description" content={description ? description : "Code & Chill est une communauté de développeur indépendant qui souhaite en apprendre d'avantages sur des languages de programmation"}/>
        <link rel="canonical" href={path ? path : "/"}/>
      </Helmet>
    )
}

export default UseTitle;