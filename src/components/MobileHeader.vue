<template>
  <header>
    <div class="head1">
      <img src="/image/Logo-01.png" alt="">
      
    </div>
    <div class="head2">
      <span class="icon"><font-awesome-icon :icon="['fas', 'bars']" /></span>
      <span><button>Contact</button></span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 6%;
  margin-bottom: 4%;
}
.head1 img{
  width: 50%;
}
.head2{
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
}
.icon{
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}
button{
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 10px;
  color: black;
  font-weight: 700;
  cursor: pointer;
  background-color: whitesmoke;
}
</style>