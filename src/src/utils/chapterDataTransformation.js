import uuidv4 from 'uuid/v4';

export function deleteChapterPartTransformation(courses, id) {
    return (
        courses.map((course) => ({
            id: course.id,
            name: course.name,
            items: course.items.map((item) => ({
                id: item.id,
                number: item.number,
                chapterTitle: item.chapterTitle,
                description: item.description,
                parts: item.parts.filter((part) => part.id !== id)
            }))
        }))
    )
}

export function editChapterInformationTransformation(courses, chapterEdit) {
    return (
        courses.map((course) => ({
                id: course.id,
                name: course.name,
                items: course.items.map((chapter) => {
                    if (chapter.id === chapterEdit.id) {
                        return {
                            ...chapterEdit
                        }
                    } else {
                        return {...chapter}
                    }
                })
            }
        ))
    )
}

export function addNewChapterTransformation(courses, chapter) {
    let newChapter = {
        id: uuidv4(),
        number: chapter.newChapter.number,
        chapterTitle: chapter.newChapter.chapterTitle,
        description: chapter.newChapter.description,
        parts: []
    };

    return (
        courses.map((item) => {
            if (item.id === chapter.courseId) {
                return {
                    id: item.id,
                    name: item.name,
                    items: [...item.items, newChapter]
                }
            } else {
                return {
                    ...item
                }
            }

        })
    )
}

export function deleteOneChapterTransformation(courses, id) {
    return (
        courses.map((item) => ({
            id: item.id,
            name: item.name,
            items: item.items.filter((item) => item.id !== id)
        }))
    )
}
    
