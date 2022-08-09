//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBDQpBGTE4SFoNIZH5lXHi7r1opgyrIs0Y",
      authDomain: "kwitter-5e003.firebaseapp.com",
      databaseURL: "https://kwitter-5e003-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e003",
      storageBucket: "kwitter-5e003.appspot.com",
      messagingSenderId: "666851982894",
      appId: "1:666851982894:web:9d9f3d1e6e878a651269bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.lod(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_tag_name = "<h4>" + name + "</h4>";
                        mesage_with_tag = < h4 class = 'message_h4' > " + message +" < /h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>Likes :" + like + "</button>";
                        row = name_with_tag + message_with_tag + like_button;
                        document.getElementById("output").innerHTML += row;
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>Likes :" + like + "</button>";
                        row = name_with_tag + message_with_tag + like_button;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}