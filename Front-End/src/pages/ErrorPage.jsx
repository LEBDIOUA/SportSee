function ErrorPage({ err }) {
  if (err === 'pageIntrouvable') {
    return (
      <main className="error">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
      </main>
    );
  }
  else if (err === 'userIntrouvable') {
    return (
      <main className="error">
        <h2>Introuvable</h2>
        <h3>L'utilisateur que vous demandez n'existe pas. Essayez avec un autre ID</h3>
      </main>
    );
  }

}
export default ErrorPage;