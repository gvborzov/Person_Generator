const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": { 
            "id_1": "Александра",
            "id_2": "Светлана",
            "id_3": "Юлианна",
            "id_4": "Анна",
            "id_5": "Наталья",
            "id_6": "Юлия",
            "id_7": "Людмила",
            "id_8": "Мария",
            "id_9": "Анастасия",
            "id_10": "Екатерина"    
        }
    }`,
    middleName: `{
        "count": 10,
        "list": {
            "id_1": "Сергеев",
            "id_2": "Петров",
            "id_3": "Юрьев",
            "id_4": "Альбертов",
            "id_5": "Степанов",
            "id_6": "Геннадьев",
            "id_7": "Викторов",
            "id_8": "Андреев",
            "id_9": "Александров",
            "id_10": "Рустамов"
        }
    }`,
    professionMale: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Столяр",
            "id_3": "Космонавт",
            "id_4": "Инженер",
            "id_5": "Плотник",
            "id_6": "Сантехник",
            "id_7": "Вы нашли пасхалочку :) ваша профессия супергерой!",
            "id_8": "Маляр",
            "id_9": "Крановщик",
            "id_10": "Строитель"
        }
    }`,
    professionFemale: `{
        "count": 10,
        "list": {
            "id_1": "Повар",
            "id_2": "Домохозяйка",
            "id_3": "Стюардесса",
            "id_4": "Учительница",
            "id_5": "Маркетолог",
            "id_6": "PR-менеджер",
            "id_7": "Вы нашли пасхалочку :) ваша профессия супергерой!",
            "id_8": "Проводница",
            "id_9": "Бизнесвумен",
            "id_10": "Дизайнер"
        }
    }`,
    months: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября"
            "id_11": "Ноября"
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
   
    randomGender: function() {
        const genderObj = this.randomIntNumber() === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return genderObj;
    },

    randomFirstName: function() {
        const gender = this.person.gender;
        if (gender === this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    
    randomMiddleName: function() {
        const gender = this.person.gender;
        if (gender === this.GENDER_MALE){
            return this.randomValue(this.middleName) + 'ич';
        } else {
            return this.randomValue(this.middleName) + 'на';
        }
    },

    randomSurname: function() {
        const gender = this.person.gender;
        if (gender === this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    randomDate: function () {
        const monthsNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const monthIndex = this.randomIntNumber(11, 0); 
        const monthName = monthsNames[monthIndex]; 
        let dayOfTheMonth;
        if (monthName === 'февраля') {
            dayOfTheMonth = this.randomIntNumber(28, 1);
        } else if (monthName == 'апреля' || 'июня' || 'Сентября' || 'Ноября'){
        dayOfTheMonth = this.randomIntNumber(30, 1);
         }   else {
            dayOfTheMonth = this.randomIntNumber(31, 1);
        }
        const dateOfTheYear = this.randomIntNumber(2023, 1940);
        return `${dayOfTheMonth} ${monthName} ${dateOfTheYear}`; 
    },

    randomProfession: function() {
        const gender = this.person.gender;
        if (gender === this.GENDER_MALE){
            return this.randomValue(this.professionMale);
        } else {
            return this.randomValue(this.professionFemale);
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.dateOfTheYear = this.randomDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};


