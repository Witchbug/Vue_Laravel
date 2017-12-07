<template>
    <div>      
<!--       Showing all users --------------------------------------------->
        <div class="my-container">
            <h1 class="fleft" style="color:#58d9ed; font-weight: bold; font-size: 24px;">Users</h1>
            <button class="fright addNew" @click="showingAddModal=true">Add New</button>
            <div class="my-clear"></div>
            <hr>
            <p class="successMessage" v-if="successMessage">{{successMessage}} <button @click="clearMessage();">Clear Message</button></p>
            <p class="errorMessage" v-if="errorMessage">{{errorMessage}} <button @click="clearMessage();">Clear Message</button></p>
            <table class="list">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tr v-for="user in users">
                    <td>{{user.id}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td><button @click="showingEditModal=true; selectUser(user);">Edit</button></td>
                    <td><button @click="showingDeleteModal=true; selectUser(user);">Delete</button></td>
                </tr>
            </table>
        </div>
        <!--Showing add model form                   -->

        <div class="my-modal" id="addModal" v-if="showingAddModal">
            <div class="modalContainer">
                <div class="modalHeading">
                    <p class="fleft">Add New User </p>
                    <button class="fright crossBox" @click="showingAddModal=false">x</button>
                    <div class="my-clear"></div>

                </div>
                <div class="modalContent">
                    <form>
                        <label for="">Name: </label>
                        <input type="text" placeholder="Jhon" v-model="newUser.username"><br><br>
                        <label for="">Email: </label>
                        <input type="text" placeholder="jhon@jhon.com" v-model="newUser.email"><br><br>
                        <label for="">Phone: </label>
                        <input type="text" placeholder="1225xxxx" v-model="newUser.phone"><br><br>
                    </form>
                    <button @click="showingAddModal=false; saveUser();">Submit</button>
                </div>
            </div>
        </div>
        <!--End of Add Model Form-->

        <!--Starting of Edit Model Form   -->
        <div class="my-modal" id="editModal" v-if="showingEditModal">
            <div class="modalContainer">
                <div class="modalHeading">
                    <p class="fleft">Edit Username </p>
                    <button class="fright crossBox" @click="showingEditModal=false">x</button>
                    <div class="my-clear"></div>

                </div>
                <div class="modalContent">
                    <form>
                        <label for="">Name: </label>
                        <input type="text" v-model="clickedUser.username"><br><br>
                        <label for="">Email: </label>
                        <input type="text"  v-model="clickedUser.email"><br><br>
                        <label for="">Phone: </label>
                        <input type="text"  v-model="clickedUser.phone"><br><br>
                    </form>
                    <button @click="showingEditModal=false; updateUser();">Update</button>
                </div>
            </div>
        </div>
        <!--End of Edit Model Form-->


        <!--Starting of Delete Model Form   -->
        <div class="my-modal" id="deleteModal" v-if="showingDeleteModal">
            <div class="modalContainer">
                <div class="modalHeading">
                    <p class="fleft">Are you sure ?</p>
                    <button class="fright crossBox" @click="showingDeleteModal=false">x</button>
                    <div class="my-clear"></div>

                </div>
                <div class="modalContent">
                    <p>You Want To Delete User: "<b>{{clickedUser.username}}</b>"</p><br>
                    <button @click="showingDeleteModal=false; deleteUser();">Yes</button>
                    <button @click="showingDeleteModal=false">No</button>
                </div>
            </div>
        </div>
        <!--End of Delete Model Form-->



    </div>
</template>

<script>   
      
    export default {
        data() {
            return {
                showingAddModal: false,
                showingEditModal: false,
                showingDeleteModal: false,
                errorMessage: "",
                successMessage: "",
                
                users: [{"id":"1","username":"Mamun","email":"mamun@mamun.com","phone":"123456"},{"id":"2","username":"mohim","email":"mohim@mohim.com","phone":"456464"},{"id":"3","username":"masud","email":"masud@masud.com","phone":"5465464"},{"id":"15","username":"Hatsune Miku","email":"miku.com","phone":"123456"},{"id":"22","username":"shuvo","email":"shuvo@shuvo.com","phone":"987"},{"id":"23","username":"Jhon","email":"jhon@jhon.com","phone":"987654"}],
                
                newUser: {
                    username: "",
                    email: "",
                    phone: ""
                },
                clickedUser: {}

            }

        },
        //        end of data property--------------------
        mounted: function() {
            console.log("mounted");
            this.getAllUsers();
        },



        methods: {

            //reading all data from data base and ----------------------------------------        
            getAllUsers: function() {
                        return this.users;
            },


            //        Add new user to the data base ---------------------------------
            saveUser: function() {
//                var formData = this.toFormData(this.newUser);
                this.users.push(this.newUser);
                    this.newUser = {
                        username: "",
                        email: "",
                        phone: ""
                    };
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                    } else {
                        this.successMessage = "User Added Successfully";
                        this.getAllUsers();
                    }
                this.successMessage = "User Added Successfully";
            },


            //        Update user to the data base ---------------------------------
            updateUser: function() {
//                var formData = this.toFormData(this.clickedUser);
                this.users.username=this.fromData.username;
                this.users.email=this.fromData.email;
                this.users.phone=this.fromData.phone;
                    this.clickedUser = {};
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                    } else {
                        this.successMessage = "Updated Successfully";
                        console.log(this.successMessage);
                        this.getAllUsers();
                    }

            },



            //        Delete user to the data base ---------------------------------
            deleteUser: function() {
//                var formData = this.toFormData(this.clickedUser);

//                axios.post("http://localhost/VueCRUD/api.php?action=delete", formData).then(function(response) {
                    this.clickedUser = {};
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                    } else {
                        this.successMessage = response.data.message;
                        this.getAllUsers();
                    }
//                });

            },


            //grabbing the user info with id from html for  updating and deleting data --------------------         
            selectUser(user) {
                this.clickedUser = user;
            },


            //data serializaion-------------------------------------------------        
            toFormData: function(obj) {
                var form_data = new FormData();
                for (var key in obj) {
                    form_data.append(key, obj[key]);
                }
                return form_data;
            },

            //clearing all messages -------------------------------------------------        
            clearMessage: function() {
                this.errorMessage = "";
                this.successMessage = "";
            }

        }
        //end of method---------------------

    }
    //    end of export

</script>

<style scoped="true">
    * {
        margin: 0;
        padding: 0;
    }

    .my-container {
        width: 960px;
        margin: auto;
        margin-top: 44px;
    }

    .fleft {
        float: left;
    }

    .fright {
        float: right;
    }

    .my-clear {
        clear: both;
    }

    h1 {
        font-size: 22px;
    }

    .addNew {
        padding: 2px 9px;
    }

    table.list {
        width: 100%;
        margin-top: 33px;
    }

    table.list th {
        background: #0E5196;
        color: #ece9e9;
        padding: 9px;
    }

    table.list td {
        padding: 9px;
        text-align: center;
    }

    table.list tr {
        background: #EEEEEE;
    }

    button {
        padding: 2px 9px;
    }

    .my-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
    }

    .modalContainer {
        width: 550px;
        background: #FFFFFF;
        margin: auto;
        margin-top: 44px;
    }

    .modalHeading {
        padding: 9px;
        background: #0654a6;
        color: aliceblue;
        font-weight: bold;
    }

    .modalContent {
        min-height: 330px;
        padding: 44px;

    }

    .crossBox {
        padding: 2px 6px;
        background: red;
        border: none;
        color: #FFFFFF;
    }


    input {
        padding: 5px;
    }


    p.errorMessage {
        background: #df8080;
        color: #300202;
        border-left: 5px solid #db1919;
        padding: 9px;
        margin: 22px 0;
    }


    p.successMessage {
        background: #D8EFC2;
        color: #104f02;
        border-left: 5px solid #37d014;
        padding: 9px;
        margin: 22px 0;
    }

</style>


























