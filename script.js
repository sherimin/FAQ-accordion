const toggleAnswer = (sectionNumber) => {
    const answer = document.getElementById(`answer${sectionNumber}`);
    const icon = document.getElementById(`toggleIcon${sectionNumber}`);
    
    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        icon.src = 'assets/images/icon-plus.svg';
    } else {
        answer.classList.add('open');
        icon.src = 'assets/images/icon-minus.svg';
    }
};
