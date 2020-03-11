
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat= $(this).data("neweat");
  
      var newEat = {
        hungry: newEat
      };
  

      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEAT
      }).then(
        function() {
          console.log("changed eat to", newEat);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=eat]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
        
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
     
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          
          location.reload();
        }
      );
    });
  });
  