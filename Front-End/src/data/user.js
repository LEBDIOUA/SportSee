class UserInfos {
    constructor(_userInfos){
        this.firstName = _userInfos.firstName;
        this.lastName = _userInfos.lastName;
        this.age = _userInfos.age;
    }
}

class KeyData {
    constructor(_keyData){
        this.calorieCount = _keyData.calorieCount;
        this.proteinCount = _keyData.proteinCount;
        this.carbohydrateCount = _keyData.carbohydrateCount;
        this.lipidCount = _keyData.lipidCount;
    }
}

class Session {
    constructor(_session, _sessionLength){
        this.date = _session.day;
        this.day = parseInt(this.date.split('-')[2]);
        this.kilogram = _session.kilogram;
        this.calories = _session.calories;
        this.sessionLength = _sessionLength;
    }
}

class Kind {
    constructor(_kind, _data){
        this.kind = _kind.kind;
        this.title = _data;
        this.value = _kind.value;
    }
}
class User {
    constructor(_id, _userInfos, _score, _keyData, _sessions, _sessionLength, _kind, _kindData){
        this.id = _id;

        this.userInfos = new UserInfos(_userInfos);
        this.score = _score * 100;
        this.keyData = new KeyData(_keyData);

        this.sessions = [];
        _sessions.forEach((session, index) => {
            this.sessions.push(new Session(session, _sessionLength[index].sessionLength));
        });

        this.kinds = [];    
        _kindData.forEach((kindData, index) => {
            this.kinds.push(new Kind(kindData, _kind[index+1]));
        });
    }

    toString = () => {
        return (
            this.id + ' ' +
            this.userInfos.firstName + ' ' +
            this.userInfos.lastName + ' ' +
            this.userInfos.age + '\n' +
            this.score + '\n' +
            this.keyData.calorieCount + '\n' +
            this.keyData.proteinCount + '\n' +
            this.keyData.carbohydrateCount + '\n' +
            this.keyData.lipidCount + '\n' +
            this.sessions.map(session => session.day + ' ' + session.kilogram + ' ' + session.calories + ' ' + session.sessionLength).join('\n') + '\n' +
            this.kinds.map(kind => kind.kind + ' ' + kind.title + ' ' + kind.value).join('\n')
        );
    }
}
export default User;