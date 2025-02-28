async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    
    data.forEach(item => {
      const element = document.querySelector(`#${item.category.toLowerCase()}`);
      
      element.querySelector('.value').textContent = item.score;
    })
    

  } catch (error) {
    console.error('fileload error:', error);
  }
}   

loadData();