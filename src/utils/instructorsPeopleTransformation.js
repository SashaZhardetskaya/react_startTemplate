export function editAccessInstructorTransformation(instructors, payload) {
    return (
        instructors.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    last_active: item.last_active,
                    referrals: item.referrals,
                    courses: item.courses,
                    id: item.id,
                    access: payload.val
                }
            } else {
                return {...item}
            }
        })
    )
}

export function editReferralsInstructorTransformation(instructors, payload) {
    return (
        instructors.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    last_active: item.last_active,
                    courses: item.courses,
                    id: item.id,
                    access: item.access,
                    referrals: payload.val
                }
            } else {
                return {...item}
            }
        })
    )
}

export function editCoursesInstructorTransformation(instructors, payload) {
    return (
        instructors.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    referrals: item.referrals,
                    last_active: item.last_active,
                    access: item.access,
                    id: item.id,
                    courses: payload.val
                }
            } else {
                return {...item}
            }
        })
    )
}
