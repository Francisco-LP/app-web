/*clase producto*/
class Product {
    constructor(name, price, year) {   /*metodo constructor*/
        this.name = name;
        this.price = price;
        this.year = year;
    }

};



/*clase interfaz*/
class Ui {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Producto</strong>: ${product.name} -
                        <strong>Precio</strong>: ${product.price} - 
                        <strong>Año</strong>: ${product.year}
                        <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                    </div>
                </div>
            `;
        productList.appendChild(element);
      };

      resetForm(){
        document.getElementById('product-form').reset();
      };

      deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado', 'primary');
        }
      }

      showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = 'alert mt-4 alert-'+cssClass;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector(".alert").remove();
          }, 3000);

      }

};




/*DOM Eventos*/

document.getElementById('product-form').addEventListener('submit', function(e) {
    
    const name = document.getElementById('name').value,
     price = document.getElementById('price').value,
     year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new Ui();

    if(name === '' || price === '' || year === ''){
        return ui.showMessage('Complete los campos del producto', 'danger');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto agregado satisfactoriamente', 'info');

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new Ui();
    ui.deleteProduct(e.target);
});