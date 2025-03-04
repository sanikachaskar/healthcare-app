document.getElementById('fetchData').addEventListener('click', () => {
  // Replace with your Render backend URL
  const backendUrl = 'https://disease-prediction-api.onrender.com/api/data';

  fetch(backendUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = data.message;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});