<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card border-0">
          <div class="card-body">
            <h3>Leftside bar</h3>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0">
          <div class="card-body">
            <h6>Body will goes here</h6>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center border-0">
          <div class="card-body">
            <div class="text-center">
              <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" class="profile rounded" width="100px" height="100px" alt="profile">
            </div>
            <h5 class="py-3">youremail@mailto.com</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.profile {
    width: 80px;
    height: 80px;
    border-radius: 50% !important;
    object-fit: cover;
}
</style>
