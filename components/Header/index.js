// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());


function Header() {

    // create element
    const headerDiv = document.createElement('div'),
          dateSpan = document.createElement('span'),
          titleH1 = document.createElement('h1'),
          tempSpan = document.createElement('span');
    // assign the values

    dateSpan.textContent = 'MARCH 28, 2019';
    titleH1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°'

    // assign class 

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    // create structure in DOM

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(tempSpan);
    
    return headerDiv;
    
}
