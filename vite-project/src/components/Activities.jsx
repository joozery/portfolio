import React, { useState, useEffect } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลกิจกรรมจาก API
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:3000/activities");
        const data = await response.json();
        setActivities(data.activities);
      } catch (err) {
        setError("Error fetching activities");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <p>Loading activities...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="activities-section">
      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities available. Please add some activities.</p>
      ) : (
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              {activity.image_url && (
                <img
                  src={activity.image_url}
                  alt={activity.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              )}
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <a href={`/activity/${activity.id}`} className="more-link">
                more
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Activities;
