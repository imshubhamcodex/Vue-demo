Vue.component('product',{

	template:`<div class="product">

			<table>
				<tr>
					<td>
						<div class="product-image">
							<img v-bind:src="image">
						</div>
					</td>
					<td>
						<div class="product-details">
							<h2>{{title}}</h2>
							<p style="float:left;margin-left: 45px;font-size: 30px; margin-top: 20px;">₹{{price}}/- Only</p>
							<div class="btn-add">
								<div class="details-div">
								<ul class="list-group list-group-horizontal-xl">
									<li style="display: inline-block;" class="list-group-item" v-for="detail in details">{{detail}}</li>
								</ul>
							</div>
								<button v-on:click="addToCart" class="btn">ADD TO CART</button>
							</div>
							<div class="discr">
								<p>{{Discription}}</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<ul>
						<li v-for="variant in variants" class="color-box"
								 v-bind:style="{background:variant.variantColor}" 
								 v-on:mouseover="updateImage(variant.variantImage)"
								>
						</li>
						</ul>
					</td>
				</tr>
			</table>
			
		</div>
		`,

		data:function(){
			return{
					heading: "Printed Long socks for men",
					Discription:"Disciprtion of shoes and sneakers.",
					image:'vmSocks-green.jpg',
					details:["80% Cotton","20% Polyster", "Gender-Any" ],
					sizes:["S","M","XL","XXL"],
					cart:0,
					variants:[
						{
							variantColor:'green',
							variantImage:'vmSocks-green.jpg'
						},
						{
							variantColor:'blue',
							variantImage:'vmSocks-blue.jpg'
						}

					]
			}
		},

		methods:{

		addToCart:function(){
			this.cart+=1
		},

		updateImage:function(variantImage){
			this.image=variantImage
		}
	},

	props:['title','price','Discription']

})

var app = new Vue({
	el:'#app',
	data:{
		title:"title",
		price:199,
		Discription:"discp."
	}
	// data:{
	// 	product: "Printed Long socks for men",
	// 	discription:"Package contains 2 pairs of colourful ankle-length cushion socks made from 100% combed cotton and imported elastic for superior grip and comfort. The all-round terry cushion easily absorbs sweat thereby making these socks a great choice for everyday casual use with all types of shoes and sneakers.",
	// 	image:'vmSocks-green.jpg',
	// 	onSale:true,
	// 	details:["80% Cotton","20% Polyster", "Gender-Any" ],
	// 	sizes:["S","M","XL","XXL"],
	// 	cart:0,

	// 	variants:[
	// 		{
	// 			variantColor:'green',
	// 			variantImage:'vmSocks-green.jpg'
	// 		},
	// 		{
	// 			variantColor:'blue',
	// 			variantImage:'vmSocks-blue.jpg'
	// 		}

	// 	]
	// },

	// methods:{

	// 	addToCart:function(){
	// 		this.cart+=1
	// 	},

	// 	updateImage:function(variantImage){
	// 		this.image=variantImage
	// 		if(variantImage=='vmSocks-blue.jpg')
	// 		{
	// 			document.getElementsByClassName('color-box')[1].style["boxShadow"]="2px 5px #000066";
	// 			document.getElementsByClassName('color-box')[0].style["boxShadow"]="none";
	// 		}
	// 		else {
	// 			document.getElementsByClassName('color-box')[0].style["boxShadow"]="2px 5px #003300";
	// 			document.getElementsByClassName('color-box')[1].style["boxShadow"]="none";
	// 		}
			
	// 	},
	// }

})