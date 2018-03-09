App = {
      web3Provider: null,
      contracts: {},
      account:'',
    
      init: function() {
        // load articlesRow
        
    
        return App.initWeb3();
      },

    
      initWeb3: function() {
        if(typeof web3 !== 'undefined'){
              App.web3Provider=web3.currentProvider;

        }
        else{
              App.web3Provider=new Web3.providers.HttpProvider("http://localhost:8545");

        }
        web3=new Web3(App.web3Provider);
        
        return App.initContract();
      },
     
    
      initContract: function() {
          
       
      },
     
    };
    
    $(function() {
      $(window).load(function() {
        App.init();
      });
    });
    