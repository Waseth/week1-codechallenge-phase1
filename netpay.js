//NHIF rates.
function nhifRates(gross){
    let output;

    if(gross >= 100000){
      output = 1700;
    }else if(gross >= 90000 && gross <= 99999){
      output = 1600;
    }else if(gross >= 80000 && gross <= 89999){
      output = 1500;
    }else if(gross >= 70000 && gross <= 79999){
      output = 1400;
    }else if(gross >= 60000 && gross <= 69999){
      output = 1300;
    }else if(gross >= 50000 && gross <= 59999){
      output = 1200;
    }else if(gross >= 45000 && gross <= 49999){
      output = 1100;
    }else if(gross >= 40000 && gross <= 44999){
      output = 1000;
    }else if(gross >= 35000 && gross <= 39999){
      output = 950;
    }else if(gross >= 30000 && gross <= 34999){
      output = 900;
    }else if(gross >= 25000 && gross <= 29999){
      output = 850;
    }else if(gross >= 20000 && gross <= 29999){
      output = 750;
    }else if(gross >= 15000 && gross <= 19999){
      output = 600;
    }else if(gross >= 12000 && gross <= 14999){
      output = 500;
    }else if(gross >= 8000 && gross <= 11999){
      output = 400;
    }else if(gross >= 6000 && gross <= 7999){
      output = 300;
    }else if(gross >= 0 && gross <= 5999){
      output = 150;
    };

    return output;
  };

  //PAYE rates.
  function payeRates(gross){
    let output;

    if(paymentPeriod === "month"){
      if(gross >= 0 && gross <= 24000){
        output = (gross * 0.1);
      }else if(gross >= 24001 && gross <= 32333){
        output = (gross * 0.25);
      }else if(gross >= 32334 && gross <= 500000){
        output = (gross * 0.3);
      }else if(gross >= 500000 && gross <= 800000){
        output = (gross * 0.325);
      }else if(gross > 800000){
        output = (gross * 0.35);
      }
    }else if(paymentPeriod === "year"){
      if(gross >= 0 && gross <= 288000){
        output = (gross * 0.1);
      }else if(gross >= 288001 && gross <= 388000){
        output = (gross * 0.25);
      }else if(gross >= 388001 && gross <= 6000000){
        output = (gross * 0.3);
      }else if(gross >= 6000001 && gross <= 9600000){
        output = (gross * 0.325);
      }else if(gross > 9600000){
        output = (gross * 0.35);
      }
    };

    return output;
  };

  // NSSF Ratings.
  function nssfRatings(gross){

    return (gross * 0.06);
  };


