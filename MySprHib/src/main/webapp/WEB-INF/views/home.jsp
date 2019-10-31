<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Colorlib Templates">
    <meta name="author" content="Colorlib">
    <meta name="keywords" content="Colorlib Templates">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->

  

<link href="resources/layout.css" rel="stylesheet" type="text/css">
<!-- <h1>Welcome to library</h1>
 -->
</head>
<body >
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">

<form action="saveBook">

Book ID   <input type="text" name="bookId" class="input--style-4"><br>
Book Name <input type="text" name="bookName" class="input--style-4"><br>

<input type="submit" value="save" class="button">
</form>
<form action="displayLib">
<input type="submit" value="display" class="button">
</form>

<form action="displayById">
<input type="submit" value="displayById" class="button">
</form>

<form action="update">
<input type="submit" value="update" class="button">
</form>

<form action="delete">
<input type="submit" value="del" class="button">

</form>
</div>
</div>
</div>
</div>
<script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    

    <!-- Main JS-->
    <script src="js/global.js"></script>
</body>
</html>
