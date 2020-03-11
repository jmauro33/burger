
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("neweat");
  
      var newEat = {
        hungry: newEat
      };
  

      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed eat to", newEat);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=eat]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
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
  