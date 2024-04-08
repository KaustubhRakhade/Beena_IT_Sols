const mockData = [
    {
        "title": "Discussion on Importance of Vaccines",
        "author": "John Doe",
        "tags": ["Vaccines", "Health"],
        "publishedDate": "8 Sept, 2023",
        "preview": "Know the importance of vaccines and how they help in preventing diseases.",
        "coverImage": "vaccine.png"
    },
    {
        "title": "Benefits of Exercise on Disease Prevention",
        "author": "Jane Doe",
        "tags": ["Exercise", "Health"],
        "publishedDate": "14 Aug, 2022",
        "preview": "Learn about the benefits of exercise and how it can help you stay healthy.",
        "coverImage": "exercise.png"
    },
    {
        "title": "Importance of Mental Health for Overall Well-being",
        "author": "John Doe",
        "tags": ["Mental Health", "Health"],
        "publishedDate": "2 Jan, 2022",
        "preview": "Understand the importance of mental health and how it can affect your overall health.",
        "coverImage": "mental-health.png"
    },
    {
        "title": "Healthy Eating Habits for a Balanced Diet",
        "author": "Jane Doe",
        "tags": ["Diet", "Health"],
        "publishedDate": "12 Dec, 2021",
        "preview": "Learn about healthy eating habits and how they can help you stay fit.",
        "coverImage": "healthy-eating.png"
    },
    {
        "title": "Importance of Regular Health Checkups",
        "author": "John Doe",
        "tags": ["Health Checkups", "Health"],
        "publishedDate": "22 Nov, 2021",
        "preview": "Understand the importance of regular health checkups and how they can help in early detection.",
        "coverImage": "health-checkups.png"
    },
    {
        "title": "Tips for a Healthy Lifestyle and How to Maintain It",
        "author": "Jane Doe",
        "tags": ["Lifestyle", "Health"],
        "publishedDate": "5 Oct, 2021",
        "preview": "Get tips for a healthy lifestyle and how to maintain it.",
        "coverImage": "healthy-lifestyle.png"
    },
    {
        "title": "Importance of Sleep for Good Health",
        "author": "John Doe",
        "tags": ["Sleep", "Health"],
        "publishedDate": "18 Sept, 2021",
        "preview": "Know the importance of sleep for good health and how it can affect your overall well-being.",
        "coverImage": "sleep.png"
    },
    {
        "title": "Benefits of Drinking Water for Health",
        "author": "Jane Doe",
        "tags": ["Water", "Health"],
        "publishedDate": "1 Aug, 2021",
        "preview": "Learn about the benefits of drinking water and how it can help you stay hydrated.",
        "coverImage": "water.png"
    },
    {
        "title": "Importance of Hygiene for Health",
        "author": "John Doe",
        "tags": ["Hygiene", "Health"],
        "publishedDate": "12 Jul, 2021",
        "preview": "Understand the importance of hygiene and how it can prevent the spread of diseases.",
        "coverImage": "hygiene.png"
    },
    {
        "title": "Healthy Habits for a Healthier You",
        "author": "Jane Doe",
        "tags": ["Habits", "Health"],
        "publishedDate": "25 Jun, 2021",
        "preview": "Get healthy habits for a healthier you and how to incorporate them into your daily routine.",
        "coverImage": "healthy-habits.png"
    },
    {
        "title": "Importance of Regular Exercise for Health",
        "author": "John Doe",
        "tags": ["Exercise", "Health"],
        "publishedDate": "8 May, 2021",
        "preview": "Understand the importance of regular exercise and how it can help you stay fit.",
        "coverImage": "regular-exercise.png"
    },
    {
        "title": "Benefits of a Balanced Diet for Health",
        "author": "Jane Doe",
        "tags": ["Diet", "Health"],
        "publishedDate": "21 Apr, 2021",
        "preview": "Learn about the benefits of a balanced diet and how it can help you stay healthy.",
        "coverImage": "balanced-diet.png"
    },
    {
        "title": "Importance of Mental Well-being for Health",
        "author": "John Doe",
        "tags": ["Mental Health", "Health"],
        "publishedDate": "3 Mar, 2021",
        "preview": "Know the importance of mental well-being and how it can affect your overall health.",
        "coverImage": "mental-wellbeing.png"
    },
    {
        "title": "Tips for Healthy Living and Lifestyle",
        "author": "Jane Doe",
        "tags": ["Lifestyle", "Health"],
        "publishedDate": "15 Feb, 2021",
        "preview": "Get tips for healthy living and how to maintain a healthy lifestyle.",
        "coverImage": "healthy-living.png"
    },
    {
        "title": "Importance of Physical Fitness for Health",
        "author": "John Doe",
        "tags": ["Fitness", "Health"],
        "publishedDate": "28 Jan, 2021",
        "preview": "Understand the importance of physical fitness and how it can help you stay active.",
        "coverImage": "physical-fitness.png"
    },
    {
        "title": "Benefits of Meditation for Health",
        "author": "Jane Doe",
        "tags": ["Meditation", "Health"],
        "publishedDate": "10 Dec, 2020",
        "preview": "Learn about the benefits of meditation and how it can help you relax and reduce stress.",
        "coverImage": "meditation.png"
    },
    {
        "title": "Importance of Healthy Eating for Health",
        "author": "John Doe",
        "tags": ["Eating", "Health"],
        "publishedDate": "22 Nov, 2020",
        "preview": "Know the importance of healthy eating and how it can help you stay fit and active.",
        "coverImage": "healthy-eating-2.png"
    },
    {
        "title": "Tips for a Healthy Heart and Cardiovascular Health",
        "author": "Jane Doe",
        "tags": ["Heart Health", "Health"],
        "publishedDate": "5 Oct, 2020",
        "preview": "Get tips for a healthy heart and how to maintain cardiovascular health.",
        "coverImage": "healthy-heart.png"
    },
    {
        "title": "Importance of Stress Management for Health",
        "author": "John Doe",
        "tags": ["Stress Management", "Health"],
        "publishedDate": "18 Sept, 2020",
        "preview": "Understand the importance of stress management and how it can help you relax and stay calm.",
        "coverImage": "stress-management.png"
    },
    {
        "title": "Benefits of Yoga for Health and Well-being",
        "author": "Jane Doe",
        "tags": ["Yoga", "Health"],
        "publishedDate": "1 Aug, 2020",
        "preview": "Learn about the benefits of yoga and how it can help you stay healthy and fit.",
        "coverImage": "yoga.png"
    },
    {
        "title": "Importance of Regular Sleep for Health",
        "author": "John Doe",
        "tags": ["Sleep", "Health"],
        "publishedDate": "12 Jul, 2020",
        "preview": "Know the importance of regular sleep and how it can affect your overall well-being.",
        "coverImage": "regular-sleep.png"
    },
    {
        "title": "Healthy Habits for a Healthier Lifestyle",
        "author": "Jane Doe",
        "tags": ["Habits", "Health"],
        "publishedDate": "25 Jun, 2020",
        "preview": "Get healthy habits for a healthier lifestyle and how to incorporate them into your daily routine.",
        "coverImage": "healthy-habits-2.png"
    },
    {
        "title": "Tips for a Healthy Mind and Mental Health",
        "author": "John Doe",
        "tags": ["Mental Health", "Health"],
        "publishedDate": "8 May, 2020",
        "preview": "Get tips for a healthy mind and how to maintain mental health.",
        "coverImage": "healthy-mind.png"
    },
    {
        "title": "Importance of Hydration for Health and Well-being",
        "author": "Jane Doe",
        "tags": ["Hydration", "Health"],
        "publishedDate": "21 Apr, 2020",
        "preview": "Understand the importance of hydration and how it can help you stay hydrated and active.",
        "coverImage": "hydration.png"
    },
    {
        "title": "Benefits of Healthy Eating for a Healthy Lifestyle",
        "author": "John Doe",
        "tags": ["Eating", "Health"],
        "publishedDate": "3 Mar, 2020",
        "preview": "Learn about the benefits of healthy eating and how it can help you stay fit and active.",
        "coverImage": "healthy-eating-3.png"
    },
    {
        "title": "Importance of Regular Exercise for Physical Fitness",
        "author": "Jane Doe",
        "tags": ["Exercise", "Health"],
        "publishedDate": "15 Feb, 2020",
        "preview": "Know the importance of regular exercise and how it can help you stay physically fit and active.",
        "coverImage": "regular-exercise-2.png"
    },
    {
        "title": "Tips for a Healthy Body and Fitness",
        "author": "John Doe",
        "tags": ["Fitness", "Health"],
        "publishedDate": "28 Jan, 2020",
        "preview": "Get tips for a healthy body and how to maintain physical fitness.",
        "coverImage": "healthy-body.png"
    }



    
]

export const getBlogs = () => {
    return mockData
}