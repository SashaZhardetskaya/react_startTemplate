export function editAccessStudentTransformation(studentsPeople, payload) {
    return (
        studentsPeople.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    last_active: item.last_active,
                    next_payment: item.next_payment,
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

export function editReferralsStudentTransformation(studentsPeople, payload) {
    return (
        studentsPeople.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    last_active: item.last_active,
                    next_payment: item.next_payment,
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

export function editCoursesStudentTransformation(studentsPeople, payload) {
    return (
        studentsPeople.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    referrals: item.referrals,
                    next_payment: item.next_payment,
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

export function editNextPaymentStudentTransformation(studentsPeople, payload) {
    return (
        studentsPeople.map((item) => {
            if (item.id === payload.id) {
                return {
                    img: item.img,
                    name: item.name,
                    status: item.status,
                    referrals: item.referrals,
                    courses: item.courses,
                    last_active: item.last_active,
                    access: item.access,
                    id: item.id,
                    next_payment: payload.val
                }
            } else {
                return {...item}
            }
        })
    )
}