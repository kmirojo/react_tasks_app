import { IVisibilityControl } from "../interfaces/Tasks";

const VisibilityControl = ({
    isChecked,
    description,
    setShowCompleted,
}: IVisibilityControl) => {
    const handleOnChange = (e: any) => {
        setShowCompleted(e.target.checked);
    };

    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={isChecked}
                onChange={handleOnChange}
            />

            <label htmlFor="form-check-label">Show {description}</label>
        </div>
    );
};

export default VisibilityControl;
