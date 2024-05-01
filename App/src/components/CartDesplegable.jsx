import React from 'react';
import "./Mesas.css";

const CartDesplegable = () => {
  return (
  <>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Orden
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Mesa</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Comida</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Selecionar
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Comida </a></li>
    <li><a class="dropdown-item" href="#">Bebida</a></li>
    <li><a class="dropdown-item" href="#">Postre</a></li>
  </ul>
</div>

      </td>
      <td><button type="button" class="btn btn-light">+</button>
      <input placeholder="0" className='achicar' ></input>
      <button type="button" class="btn btn-light">-</button></td>
      <td>$500</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Selecionar
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Comida </a></li>
    <li><a class="dropdown-item" href="#">Bebida</a></li>
    <li><a class="dropdown-item" href="#">Postre</a></li>
  </ul>
</div></td>
      <td><button type="button" class="btn btn-light">+</button>
      <input placeholder="0" className='achicar' ></input>
      <button type="button" class="btn btn-light">-</button></td>
      <td>$20</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Imprimir</button>
      </div>
    </div>
  </div>
</div>


</>
  );
}



  export default CartDesplegable;