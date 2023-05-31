import React from 'react';

const AreYouSure = () => {
  return (
    <div class="modal-wrapper">
  <div class="modalDelete">
    <div class="headDelete">
      <a class="btn-close trigger" href="#">
        <i class="fa fa-times" aria-hidden="true"></i>
      </a>
    </div>
    <div class="contentDelete">
        <div class="good-job">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h1>Good Job!</h1>
        </div>
    </div>
  </div>
</div>
  );
}

export default AreYouSure;
