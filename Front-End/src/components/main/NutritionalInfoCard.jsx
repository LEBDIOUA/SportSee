function NutritionalInfoCard({ keyData }) {
    return (
        <div className="nutritionalInfoCard">
            <article className="card">
                <img src="../../public/calories.svg" title="Calories Count" className="logoCard" />
                <div className="detail">
                    <h3>{keyData.calorieCount}KCal</h3>
                    <p>Calorie</p>
                </div>
            </article>

            <article className="card">
                <img src="../../public/proteines.svg" title="Protein Count" className="logoCard" />
                <div className="detail">
                    <h3>{keyData.proteinCount}g</h3>
                    <p>Proteines</p>
                </div>
            </article>

            <article className="card">
                <img src="../../public/carbs.svg" title="Carbohydrate Count" className="logoCard" />
                <div className="detail">
                    <h3>{keyData.carbohydrateCount}g</h3>
                    <p>Glucides</p>
                </div>
            </article>

            <article className="card">
                <img src="../../public/fat.svg" title="Lipid Count" className="logoCard" />
                <div className="detail">
                    <h3>{keyData.lipidCount}g</h3>
                    <p>Lipides</p>
                </div>
            </article>
        </div>

    );
}
export default NutritionalInfoCard;