function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/b3hold23"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/angel-fernandez-132083188/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/25458717/b3hold23?tab=profile"
    }
  ]

  return (
    <footer className="flex-row px-2">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
