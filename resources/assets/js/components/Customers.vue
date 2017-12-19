<template>
<div class="customerMenu">
    <!--<input type="email" v-model="formInput.email" class="form-control" id="email">-->

    <form v-on:submit.prevent="createCustomer" method="post">
        <div class="form-group">
            <label for="email">Name</label>
            <input type="text" v-model="formInput.name" class="form-control" id="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate="'email'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="formInput.email" class="form-control" name="email" type="text" placeholder="Email" required>
                <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>


    </form>
    <table class="table table-bordered table-striped table-condensed ">
        <thead>
            <tr>
                <th>Name</th>
                <th>EMAIL</th>
                <th>Action</th>
            </tr>
        </thead>

        <importedChildCompo v-for="customer in customers" :key="customer.id" v-bind:customerHello="customer" v-on:delete-customer="deleteCustomer" v-on:update-customer="fetchCustomer"></importedChildCompo>

    </table>
</div>
</template>

<script>
    import childComponent from './Customer.vue';



    export default {
        components: {
            'importedChildCompo': childComponent
        },

        data() {
            return {
                customers: [],
                formInput: {
                    name: '',
                    email: ''
                },

            }
        },


        created() {

            this.fetchCustomer();
        },
        methods: {
            fetchCustomer() {

                axios.get("allcustomers").then(response => {this.customers = response.data.allcustomers});

            },
            createCustomer(){
                axios.post("/createcustomer/",this.formInput).then(response => {
                    this.customers.push(response.data.customer);
                    this.formInput={name: '', email: ''};
                    this.fetchCustomer();
                    console.log(response.data);
                });
            },

            deleteCustomer(customer){
                axios.delete("/datacustomer/"+customer.id).then(response => {
                    // Let index = this.customers.indexOf(customer);
                    // this.customers.splice(index,1);
                    this.fetchCustomer();
                    console.log(response.data);
                });
            },


        }
    }
</script>

<style scoped>
    .help-block{
        color: red;
    }

    table {
        padding: 10px;
    }
    .customerMenu{
        padding: 10px;
    }


</style>
