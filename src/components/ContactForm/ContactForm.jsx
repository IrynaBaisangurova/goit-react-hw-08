// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";
// import css from "../FormStyles/FormStyles.module.css";

// const ContactForm = () => {
//   const initialValues = {
//     name: "",
//     number: "",
//   };
//   const userId = useId();
//   const numberId = useId();
//   const FeedbackSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Required"),
//     number: Yup.string()
//       .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/, {
//         message: "Invalid number, 111-11-11",
//         excludeEmptyString: false,
//       })
//       .required("Required"),
//   });

//   const dispatch = useDispatch();
//   const handleSubmit = (values, actions) => {
//     dispatch(addContact(values));
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form className={css.form}>
//         <div className={css.field}>
//           <label className={css.name} htmlFor={userId}>
//             Name
//           </label>
//           <Field className={css.input} name="name" id={userId} />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.field}>
//           <label className={css.name} htmlFor={numberId}>
//             Number
//           </label>
//           <Field className={css.input} name="number" id={numberId} />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import c from "../FormStyles/FormStyles.module.css";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});
const initialValues = {
	name: '',
	number: '',
};

const ContactForm = () => {
	const nameFieldId = useId();
	const numberFieldId = useId();

	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(addContact(values))
			
			.then((result) => {
				toast.success(`Contact ${values.name} Successfully added!`);
				console.log('result: ', result);

				actions.setSubmitting(false);
				actions.resetForm();
			})
			.catch(() => {
				toast.error('Failed to add contact');
				actions.setSubmitting(false);
			});
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={ContactSchema}
		>
			{({ isSubmitting }) => (
				<Form className={c.form}>
					<label className={c.label} htmlFor={nameFieldId}>
						Name
					</label>
					<div className={c.inputBlock}>
						<Field
							className={c.input}
							type='text'
							name='name'
							id={nameFieldId}
						/>
						<ErrorMessage
							className={c.error}
							name='name'
							component='div'
						/>
					</div>

					<label className={c.label} htmlFor={numberFieldId}>
						Number
					</label>
					<div className={c.inputBlock}>
						<Field
							className={c.input}
							type='tel'
							inputMode='tel'
							name='number'
							id={numberFieldId}
						/>
						<ErrorMessage
							className={c.error}
							name='number'
							component='div'
						/>
					</div>

					<button
						className={c.formButton}
						type='submit'
						disabled={isSubmitting}
					>
						Add contact
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
