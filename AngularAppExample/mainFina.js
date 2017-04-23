var app;
var homeMortgage = 0;
var homeMortLength = 0;
var homeMortRate = 0;

var carLoan = 0;
var carLoanLength = 0;
var carLoanRate = 0;

var schoolLoan = 0;
var schoolLoanLength = 0;
var schoolLoanRate = 0;

var creditCard = 0;
var creditCardRate = 0;

var food = 0;
var other = 0;

var job = "";
var salary = 0;
var passiveIncome = 0;
var taxRate = 0;
	// this fucntion grabs all the input from the html form and stores it
	function getInput(){
		job = document.getElementById("inputJob").value;
		salary = document.getElementById("inputSal").value;
		taxRate = document.getElementById("inputTax").value/100;
		homeMortgage = document.getElementById("inputHomeMort").value;
		homeMortLength = document.getElementById("inputHomeMortLen").value;
		homeMortRate = document.getElementById("inputHomeMortRate").value/100;
		carLoan = document.getElementById("inputCarLoan").value;
		carLoanLength = document.getElementById("inputcarLoanLen").value;
		carLoanRate = document.getElementById("inputcarLoanRate").value/100;
		schoolLoan = document.getElementById("inputSchoolLoan").value;
		schoolLoanLength = document.getElementById("inputSchoolLen").value;
		schoolLoanRate = document.getElementById("inputSchoolRate").value/100;
		creditCard = document.getElementById("inputCreditdedt").value;
		creditCardRate = document.getElementById("inputCreditRate").value/100;
		food = document.getElementById("inputFood").value;
	}


	// this is where the controller for the stocks is
	//app = angular.module('finaApp',[]);
	app.controller('stockCtrl',function($scope){
		$scope.stocks = [{"name":"","shares":"","price":"","total":""}]; // this is the data structure that stores stock information

		// this adds a stock to data structure
		$scope.addStock = function(){
			$scope.stocks.push({name: $scope.name,shares: $scope.shares,price: $scope.price,total: ($scope.shares * $scope.price)});
		};

		// this sells and removes a stock from the data structure
		// its adds the sell value to the current passive income
		$scope.sellStock = function(stockName){
			//alert("In sellStock");
			for(i=0;i<$scope.stocks.length;i++){
				if($scope.stocks[i].name == stockName){
					//alert("Found Stock");
					passiveIncome += $scope.stocks[i].total;
					$scope.stocks[i].shares = 0;
					$scope.stocks.splice(i,1)
					break;
				}
			}
		};
	});
	// this is where the controller for the info
	app.controller('infoCtrl',function($scope){
		$scope.getJob = function(){return job;}
		$scope.getSal = function(){return salary;}
		$scope.getPasvInc = function(){return passiveIncome;}
	});

	// this is where the controller for the expenses is
	app.controller('expenCtrl',function($scope){
		$scope.getTaxPayment = function(){return salary * taxRate;}
		$scope.getHomeMortPayment = function(){return homeMortgage*homeMortRate + ((homeMortgage/homeMortLength)/12);}
		$scope.getCarLoanPayment = function(){return carLoan*carLoanRate + ((carLoan/carLoanLength)/12);}
		$scope.getSchoolLoanPayment = function(){return schoolLoan*schoolLoanRate + ((schoolLoan/schoolLoanLength)/12);}
		$scope.getCreditCardPayment = function(){return creditCard * creditCardRate + creditCard/48;}
		$scope.getFoodPayment = function(){return food;}
		$scope.getOtherPayment = function(){return other;}
	});

	// this is where the controller for the liab is
	app.controller('liabCtrl',function($scope){
		$scope.getHomeMort = function(){return homeMortgage;}
		$scope.getCarLoan = function(){return carLoan;}
		$scope.getSchoolLoan = function(){return schoolLoan;}
		$scope.getCreditCard = function(){return creditCard;}
	});
