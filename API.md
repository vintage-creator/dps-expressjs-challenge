# API Documentation

## Projects

### GET /api/projects

<p>Retrieve all projects.</p>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
[
  {
    "id": 1,
    "name": "Project 1",
    "description": "Description 1"
  },
  ...
]
</code></pre>

<h3>GET /api/projects/:id</h3>
<p>Retrieve a project by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the project.</li>
</ul>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
{
  "id": 1,
  "name": "Project 1",
  "description": "Description 1"
}
</code></pre>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Project not found"
}
</code></pre>

<h3>POST /api/projects</h3>
<p>Create a new project.</p>

<h4>Request Body:</h4>
<pre><code>
{
  "name": "string",
  "description": "string"
}
</code></pre>

<h4>Response:</h4>
<h5>201 Created</h5>
<pre><code>
{
  "id": 1,
  "name": "Project 1",
  "description": "Description 1"
}
</code></pre>

<h3>PUT /api/projects/:id</h3>
<p>Update a project by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the project.</li>
</ul>

<h4>Request Body:</h4>
<pre><code>
{
  "name": "string",
  "description": "string"
}
</code></pre>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
{
  "id": 1,
  "name": "Updated Project",
  "description": "Updated Description"
}
</code></pre>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Project not found"
}
</code></pre>

<h3>DELETE /api/projects/:id</h3>
<p>Delete a project by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the project.</li>
</ul>

<h4>Response:</h4>
<h5>204 No Content</h5>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Project not found"
}
</code></pre>

<h2>Reports</h2>

<h3>GET /api/reports</h3>
<p>Retrieve all reports.</p>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
[
  {
    "id": 1,
    "text": "Report 1",
    "projectid": 1
  },
  ...
]
</code></pre>

<h3>GET /api/reports/:id</h3>
<p>Retrieve a report by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the report.</li>
</ul>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
{
  "id": 1,
  "text": "Report 1",
  "projectid": 1
}
</code></pre>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Report not found"
}
</code></pre>

<h3>GET /api/reports/projects/:projectId</h3>
<p>Retrieve reports by project ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>projectId</code> (number): The ID of the project.</li>
</ul>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
[
  {
    "id": 1,
    "text": "Report 1",
    "projectid": 1
  },
  ...
]
</code></pre>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Report not found"
}
</code></pre>

<h3>POST /api/reports/projects/:projectId</h3>
<p>Create a new report for a project.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>projectId</code> (number): The ID of the project.</li>
</ul>

<h4>Request Body:</h4>
<pre><code>
{
  "text": "string"
}
</code></pre>

<h4>Response:</h4>
<h5>201 Created</h5>
<pre><code>
{
  "id": 1,
  "text": "Report 1",
  "projectid": 1
}
</code></pre>

<h3>PUT /api/reports/:id</h3>
<p>Update a report by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the report.</li>
</ul>

<h4>Request Body:</h4>
<pre><code>
{
  "text": "string",
  "projectid": "number"
}
</code></pre>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
{
  "id": 1,
  "text": "Updated Report",
  "projectid": 1
}
</code></pre>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Report not found"
}
</code></pre>

<h3>DELETE /api/reports/:id</h3>
<p>Delete a report by its ID.</p>

<h4>Parameters:</h4>
<ul>
  <li><code>id</code> (number): The ID of the report.</li>
</ul>

<h4>Response:</h4>
<h5>204 No Content</h5>
<h5>404 Not Found</h5>
<pre><code>
{
  "error": "Report not found"
}
</code></pre>

<h3>GET /api/reports/repeated-words</h3>
<p>Retrieve reports where the same word appears at least three times.</p>

<h4>Response:</h4>
<h5>200 OK</h5>
<pre><code>
[
  {
    "id": 1,
    "text": "Report 1 with repeated words",
    "projectid": 1
  },
  ...
]
</code></pre>

<h2>Authentication</h2>
<p>All API routes are secured with a hardcoded authentication token ("Password123"). Include this token in the request headers as follows:</p>

<pre><code>
Authorization: Password123
</code></pre>
