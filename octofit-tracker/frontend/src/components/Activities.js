import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://humble-fiesta-vqrxgrgp9qhw56p-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Activity Type</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={activity._id}>
              <th scope="row">{index + 1}</th>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
