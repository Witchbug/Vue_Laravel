<template>

<tbody>
        <tr>
                <td>
                        <input type="text" v-model="editForm.name" class="form-control" v-if="edit">
                        <span v-else>{{customerHello.name}}</span>
                </td>


                <td>
                        <input type="text" v-model="editForm.email" class="form-control" v-if="edit">
                        <span v-else>{{customerHello.email}}</span>
                </td>

                <td>
                        <button v-on:click="editCustomer" type="button" class="btn btn-info" v-if="!edit">Edit</button>

                        <button v-on:click="editCancel" type="button" class="btn btn-default" v-if="edit">Cancel</button>
                        <button type="button" v-on:click="updateCustomer(customerHello,editForm)" v-if="edit" class="btn btn-primary">Update</button>

                        <button type="button" class="btn btn-danger my-button" v-on:click="$emit('delete-customer', customerHello)" v-if="!edit">Delete</button>
                </td>

        </tr>

</tbody>



</template>


<script>
    export default{
        props: ['customerHello'],
        data(){
            return{
                edit: false,
                editForm:{
                    name: "",
                    email: ""
                }
            }

        },

        methods:{
            editCustomer(){
                this.edit=true;
                this.editForm.name=this.customerHello.name;
                this.editForm.email=this.customerHello.email;
            },

            editCancel(){
                this.edit=false;
                this.editForm.name="";
                this.editForm.email="";
            },
            updateCustomer(oldCustomer, newCustomer){
                axios.patch("/datacustomer/"+oldCustomer.id, newCustomer).then(response=>{
                    this.$emit('update-customer');
                    this.editCancel();
                    console.log(response.data);
                });
            }
        }
    }


</script>


<style scoped>
        tr td{
                padding: auto;
        }
        .my-button{
                margin: auto;
        }
</style>