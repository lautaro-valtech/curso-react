import PropTypes from 'prop-types';

export const TodoItem = ({
  id,
  description,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  const conditionalStyle = {
    decorationLine: done ? 'text-decoration-line-through' : '',
  };

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${conditionalStyle.decorationLine}`}
        onClick={() => onToggleTodo(id)}
        aria-label='span'
      >
        {description}
      </span>
      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

// TodoItem.defaultProps = {
//   id: null,
//   description: null,
//   done: false,
//   onDeleteTodo: () => {},
//   onToggleTodo: () => {},
// };
