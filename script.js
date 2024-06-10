
function scrollToElement(elementSelector, instance = 0) {
    //instansiasi function dengan 2 parameter
    // dan parameter nya ada 2 variable local berupa elementSelector & instance yg bervalue 0

    const elements = document.querySelectorAll(elementSelector);
    //inisialisasi variable , valuenya berupa elemen css yg terdapat di kode html

    if (elements.length > instance) {
        // jika (header yg isinya 2 elements) < instance = 0
       
        elements[instance].scrollIntoView({ behavior: 'smooth', block: 'start' });
        //maka header yg ke 0, akan mengalami pergeseran dengan smooth 
        //ke bagian start (atas tampilan jendela)
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
//inisialisasi var link dengan mengakses  elemet html berupa link

link1.addEventListener('click', () => {
    scrollToElement('.header');
});
//ketika user menclick bagian  link 1, maka addEventListener
//akan merekam tsb, dan menjalankan function scrollToElement , 
//dan akan bergulir perlahan ke bagian header

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});
//ketika user menclick bagian  link 2, maka addEventListener
//akan merekam tsb, dan menjalankan function scrollToElement , 
//dan akan bergulir perlahan ke bagian header 1

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
//ketika user menclick bagian  link 3, maka addEventListener
//akan merekam tsb, dan menjalankan function scrollToElement , 
//dan akan bergulir perlahan ke bagian column