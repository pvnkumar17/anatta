const baseUrl = "https://anatta-demo-app.herokuapp.com/api/products";

export function getProducts() {
  return fetch(baseUrl)
    .then(function(response) {
        return response.json();
      })
    .catch(function(error) {
        return error;
      });
}

export function getProduct(id) {
  return fetch(baseUrl+"/"+id)
    .then(function(response) {
        return response.json();
      })
    .catch(function(error) {
        return error;
      });
}

export function getProductDetails(id) {
  return fetch(baseUrl+"/"+id+"/image/")
    .then(function(response) {
        return response.json();
      })
    .catch(function(error) {
        return error;
      });
}
