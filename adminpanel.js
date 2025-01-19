
document.getElementById('hamburger-btn').addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set, push, get } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeX_bLs9W-qfPv1JGdnVNfOcVq_mHeveA",
    authDomain: "cebir-web.firebaseapp.com",
    databaseURL: "https://cebir-web-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cebir-web",
    storageBucket: "cebir-web.firebasestorage.app",
    messagingSenderId: "82883967595",
    appId: "1:82883967595:web:b6272e110c57aac0b98f2e"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(database, 'formData'); // "labels" düğümünü hedefle
get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();

        const list = Object.entries(data).reverse();


        list.forEach((element, index) => {
            const data = element[1];

            const obj = {
                name: data.name,
                stdNumber: data.stdno,
                parentNumber: data.prtno,
                examDate: data.examdate,
                schoolName: data.schoolname,
                grade: data.grade,
                submit: data.timestamp,
            };

            document.createElement(createListElement(obj.name, obj.stdNumber, obj.parentNumber, obj.examDate, obj.schoolName, obj.grade, obj.submit))
        });
    }
})




function createListElement(name, studentNumber, parentNumber, examDate, schoolName, grade, submitDate) {
        const element = document.createElement('div');
        element.className = 'list-item';
        document.getElementById('student-list').appendChild(element);

        const title = document.createElement('div');
        title.innerHTML = name;
        title.className = "list-title";

        const date = document.createElement('div')
        
        var dateInstance = new Date(submitDate)
        let dateYear = dateInstance.toLocaleDateString('tr-TR')
        date.innerHTML = `${dateYear}`;
        date.className = "list-date";

        const divider = document.createElement('div')
        divider.className = 'list-divider'

        const detailsList = document.createElement('div')
        detailsList.className = 'list-details'

        const nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Isim-Soyisim: ${name}`;

        const studentNumberLabel = document.createElement('label')
        studentNumberLabel.innerHTML = `Ogrenci Numarasi: ${studentNumber}`;
        studentNumberLabel.className = 'stdlist-item'

        const parentNumberLabel = document.createElement('label')
        parentNumberLabel.innerHTML = `Veli Numarasi: ${parentNumber}`;
        parentNumberLabel.className = 'stdlist-item'

        const examDateLabel = document.createElement('label')
        examDateLabel.innerHTML = `Tercih Edilen Sinav Tarihi: ${examDate}`;
        examDateLabel.className = 'stdlist-item'

        const schoolLabel = document.createElement('label')
        schoolLabel.innerHTML = `Okul: ${schoolName}`;
        schoolLabel.className = 'stdlist-item'

        const gradeLabel = document.createElement('label')
        gradeLabel.innerHTML = `Sinif Duzeyi: ${grade}`;
        gradeLabel.className = 'stdlist-item'

        const brLabel = document.createElement('br');

        element.appendChild(title);
        element.appendChild(date);
        element.appendChild(divider);
        element.appendChild(detailsList);

        detailsList.appendChild(nameLabel)
        detailsList.appendChild(studentNumberLabel)
        detailsList.appendChild(parentNumberLabel)
        detailsList.appendChild(examDateLabel)
        detailsList.appendChild(schoolLabel)
        detailsList.appendChild(gradeLabel)


    }