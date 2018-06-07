// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// //test for main app functionality
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// //test for api connectivity
// describe('fetchPrograms', () => {
//     it('Should dispatch fetchProgramsSuccess', () => {
//         const program = {
//             workout: []
//         };
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return program;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return fetchPrograms()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith('/programs');
//             expect(dispatch).toHaveBeenCalledWith(fetchProgramsSuccess(program));
//         });
//     });
// });
// //test for username and login
