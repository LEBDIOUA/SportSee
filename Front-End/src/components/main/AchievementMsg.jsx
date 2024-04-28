function AchievementMsg({ firstName }) {
    const firstLetterCapitalized = (mot) => {
        return mot[0].toUpperCase().concat(mot.substr(1, mot.length - 1));
    }

    return (
        <section className="presentation">
            <h1 id="titre">Bonjour
                {firstName && (
                    <span id="nom"> {firstLetterCapitalized(firstName)}</span>
                )}
            </h1>

            <p id="texte">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    )
}
export default AchievementMsg;