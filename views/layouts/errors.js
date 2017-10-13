<% if (typeof success !== 'undefined') { %>
    <%= success %>
    <% } %> 

    <%
    if (typeof errors !== 'undefined') {
        for(var i in errors){
        %>
        <p>
            <%= errors[i].message %>
        </p>
        <% }
    } %>