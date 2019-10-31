<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<link href="resources/layout.css" rel="stylesheet" type="text/css">
<style>

</style>
</head>
<body style="background-color:pink">
</head>
<body>

<h1>Book details:</h1><br>

<c:forEach items="${book}" var="b">
<div id="borderDemo" >



Book Name: 	${b.bookName}<br>
Book Id:	${b.bookId}<br>
</div>
<br>
</c:forEach> <br>
</body>
</html>
