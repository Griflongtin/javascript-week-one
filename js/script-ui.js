import { User } from './../js/script.js';

$(function() {
  $("#input-date").submit(function() {
    event.preventDefault();
    const born = $("#date-input-born").val();
    const user1 = new User(born, moment().format('L'));
    $("#you-time").append(user1.youTime());
    $("#mercury").append(user1.mercury());
    $("#venus").append(user1.venus());
    $("#mars").append(user1.mars());
    $("#jupiter").append(user1.jupiter());
    $('#venus-time').append(user1.smallerLifeLeft());
    $("#mercury-time").append(user1.smallerLifeLeft());
    $("#mars-time").append(user1.marsLifeLeft());
    $("#jupiter-time").append(user1.jupiterLifeLeft());
  });
});
