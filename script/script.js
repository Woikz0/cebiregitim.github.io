
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
 
    // Form verilerini al
    const name = document.getElementById('name-surname').value;
    const stdno = document.getElementById('std-no').value;
    const prtno = document.getElementById('prt-no').value;
    const examdate = document.getElementById('exam-date').value;
    const schoolname = document.getElementById('school-name').value;
    const grade = document.getElementById('grade').value;

    // Firebase Realtime Database'e yaz
    const dbRef = ref(database, 'formData/');
    const newEntry = push(dbRef); 
    set(newEntry, {
        name: name,
        stdno: stdno,
        prtno: prtno,
        examdate: examdate,
        schoolname: schoolname,
        grade: grade,
        timestamp: new Date().toISOString()
    })
        .then(() => {


            alert('Veriler başarıyla kaydedildi!');
        })
        .catch((error) => {
            console.error('Hata oluştu:', error);
            alert('Veriler kaydedilirken bir hata oluştu.');
        });
});
