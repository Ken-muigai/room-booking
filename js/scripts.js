

$(document).ready(function(){
    //nav load
    $('#nav-placeholder').load('navBar.html nav')
    // toggle the hidden details div
    $(".showCardBedsitters").hover(function(){
        $(".initiallyHidden1").toggle();
    });
    $(".showCard1Bedroom").hover(function(){
        $(".initiallyHidden2").toggle();
    });
    $(".showCard2Bedroom").hover(function(){
        $(".initiallyHidden3").toggle();
    });

  
});

// function to display moday contents
    function myInfo(){
        var name = document.getElementById("exampleInputName").value;
        document.getElementById("clientName").innerHTML = name;
        var phoneNumber = document.getElementById("exampleInputNumber").value;
        document.getElementById("clientPhone").innerHTML = phoneNumber;
        var checkInDate = document.getElementById("exampleInputCheckIn").value;
        document.getElementById("ChechIn").innerHTML = checkInDate;
        var checkOutDate = document.getElementById("exampleInputCheckOut").value;
        document.getElementById("CheckOut").innerHTML = checkOutDate;
    }
    // top rated rooms booking function
    function topRated(){
        var jontesApartments = document.getElementById("customCheck1").checked;
        if( jontesApartments == true){
            jontesApartments = 7000;
        }
        var elNinel = document.getElementById("customCheck2").checked;
        if( elNinel == true){
            elNinel = 7500
        }
        var GodsGrace = document.getElementById("customCheck3").checked;
        if( GodsGrace == true){
            GodsGrace = 8000
        }
     
         var topRatedRoomsTotal = jontesApartments + elNinel  + GodsGrace;
         document.getElementById("housePrice").innerHTML = topRatedRoomsTotal
         
         if (jontesApartments == 7000){
             roomjontesApartments = " Jontes Apartment, "
         }else{
            roomjontesApartments = " "
         }
         if(elNinel == 7500){
             roomelNinel = "  El Ninel Rooms,  "
         }else{
            roomelNinel = " "
         }if(GodsGrace == 3000){
             roomGodsGrace = "  Gods Grace Palace "
         }else{
            roomGodsGrace = "  "
         }
 
         var topRatedTotal = roomjontesApartments + roomelNinel + roomGodsGrace;
         document.getElementById("houseNames").innerHTML = topRatedTotal;
    }
    // new function
   // 1 bedroom rooms booking function
    function myOneBedroom(){

        var nayers = document.getElementById("check1").checked;
       if( nayers == true){
           nayers = 2000;
       }
       var keekorok = document.getElementById("check2").checked;
       if( keekorok == true){
           keekorok = 2500
       }
       var crayFish = document.getElementById("check3").checked;
       if( crayFish == true){
          crayFish = 3000
       }
    
        var oneBedroomTotal = nayers + keekorok  + crayFish;
        document.getElementById("housePrice").innerHTML = oneBedroomTotal
        
        if (nayers == 2000){
            roomNayers = "Nayers House, "
        }else{
            roomNayers = " "
        }
        if(keekorok == 2500){
            roomKeekorok = "Keekorok House, "
        }else{
            roomKeekorok = " "
        }if(crayFish == 3000){
            roomCrayFish = "Cray Fish House "
        }else{
            roomCrayFish = "  "
        }

        var oneBedroomHouse = roomNayers + roomKeekorok + roomCrayFish;
        document.getElementById("houseNames").innerHTML = oneBedroomHouse
    }
    // 2 bedroom booking function
    function myTwoBedroom(){
        var kingfisher = document.getElementById("customCheck1").checked;
        if( kingfisher == true){
            kingfisher = 3500;
        }
        var pearlPalace = document.getElementById("customCheck2").checked;
        if( pearlPalace == true){
            pearlPalace = 4000
        }
        var flemaGuest = document.getElementById("customCheck3").checked;
        if( flemaGuest == true){
            flemaGuest = 4500
        }
        var radisonBlue = document.getElementById("customCheck11").checked;
        if( radisonBlue == true){
            radisonBlue = 5000;
        }
        var elNoel = document.getElementById("customCheck22").checked;
        if( elNoel == true){
            elNoel = 5500
        }
        var paradiseGate = document.getElementById("customCheck33").checked;
        if( paradiseGate == true){
            paradiseGate = 6000
        }
        // end of code to take calculte total cost of all selected rooms
        var twoBedroomTotal = kingfisher + pearlPalace  + flemaGuest + radisonBlue + elNoel + paradiseGate;
        document.getElementById("housePrice").innerHTML = twoBedroomTotal

        // code to determine and append the selected houses
        if (kingfisher == 3500){
            roomKingfisher = "Kingfisher Nest Apartment, "
        }else{
            roomKingfisher = " "
        }
        if(pearlPalace == 4000){
            roomPearlPalace = "  Pearl Palace,  "
        }else{
            roomPearlPalace = " "
        }if(flemaGuest == 4500){
            roomFlemaGuest = "   Flema Guest Palace,  "
        }else{
            roomFlemaGuest = "  "
        } if (radisonBlue == 5000){
            roomRadisonBlue = "  Radison Blue Flats,  "
        }else{
            roomRadisonBlue = " "
        }
        if(elNoel == 5500){
            roomElNoel = " El Noel Homes, "
        }else{
            roomElNoel = " "
        }if(paradiseGate == 6000){
            roomParadiseGate = "   Paradise Gate,  "
        }else{
            roomParadiseGate = "  "
        }

        var twoBedroomHouse = roomKingfisher + roomPearlPalace + roomFlemaGuest +  roomRadisonBlue + roomElNoel + roomParadiseGate;
        document.getElementById("houseNames").innerHTML = twoBedroomHouse
    
    }

