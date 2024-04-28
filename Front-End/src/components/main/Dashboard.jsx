import Graphs from "./Graphs";
import NutritionalInfoCard from "./NutritionalInfoCard"
import AchievementMsg from "./AchievementMsg";

function Dashboard({ user }) {
    return (
        <main className="dashboard">
            <AchievementMsg firstName={user.userInfos.firstName} />
            <section className="graphsInfos">
                <Graphs user={user} />
                <NutritionalInfoCard keyData={user.keyData} />
            </section>
        </main>
    );
}
export default Dashboard;