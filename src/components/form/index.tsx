interface props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<props> = ({ children, onSubmit }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
