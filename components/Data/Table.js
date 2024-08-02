export default function Table({headings, items}) {
    return <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr>
                {
                    headings.map((item, index) => {
                        return <th key={index}>{item}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                items.map((item, index) => {
                    return <tr key={index}>
                        {
                            Object.entries(item).map((key, subject) => {
                                return <td>{key}</td>
                            })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}