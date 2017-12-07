<!--this page is only for contorling header------------------------->

<template>
        <div class="container">
            <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="#">Online POS System</a>
                    </div>
                    <ul class="nav navbar-nav">
                      <li class="active"><router-link to="/">Home</router-link></li>
                      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a href="#">Page 1-1</a></li>
                          <li><a href="#">Page 1-2</a></li>
                          <li><a href="#">Page 1-3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page 2</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                     <li><router-link to="/signUp" exact><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
                      <li><router-link to="/login" exact><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
                      <li><router-link to="/admin" exact><span class="glyphicon glyphicon-user"></span> Admin</router-link></li>
                    </ul>
                  </div>
            </nav>
        </div>
</template>

<script>
    export default {}

</script>

<style scoped="true">


</style>
